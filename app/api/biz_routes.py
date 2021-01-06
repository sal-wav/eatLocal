from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Business

biz_routes = Blueprint('biz', __name__)


@biz_routes.route('/', methods=['GET'])
def businesses():
    businesses = Business.query.all()
    return {"biz": [biz.to_dict() for biz in businesses]}

@biz_routes.route('/', methods=["POST"])
@login_required
def post_biz():
    form = BizForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        biz = Business(
            name=form.data['name'],
            image_url=form.data['image_url'],
            phone_num=form.data['phone_num'],
            user_id=current_user.id,
            category_id=form.data['category_id']
        )
        db.session.add(biz)
        db.session.commit()
        return biz.to_dict()
    return {'errors': form.errors}, 422

@biz_routes.route('/<int:id>', methods=["GET", "POST", "DELETE"])
@login_required
def biz(id):
    biz = Business.query.get(id)
    if request.method == 'GET':
        return biz.to_dict()
    # MAKE BIZ FORM !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    form = BizForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if request.method == 'DELETE':
        db.session.delete(biz)
        db.session.commit()
        return {'message': 'Biz has been deleted'}
    if biz.user_id == current_user.id:
        if form.validate_on_submit():
            biz = Business(
                name=form.data['name'],
                image_url=form.data['image_url'],
                phone_num=form.data['phone_num'],
                user_id=current_user.id,
                category_id=form.data['category_id']
            )
            db.session.add(biz)
            db.session.commit()
            return biz.to_dict()
        return {'errors': form.errors}, 422
    return {'errors': 'Only the owner can delete this biz.'}, 401
