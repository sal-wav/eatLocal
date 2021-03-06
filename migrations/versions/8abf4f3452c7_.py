"""empty message

Revision ID: 8abf4f3452c7
Revises: 5018d58f05ac
Create Date: 2021-01-07 14:13:24.221156

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8abf4f3452c7'
down_revision = '5018d58f05ac'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('features',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('icon', sa.String(length=25), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('biz_features',
    sa.Column('feature_id', sa.Integer(), nullable=True),
    sa.Column('business_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['business_id'], ['businesses.id'], ),
    sa.ForeignKeyConstraint(['feature_id'], ['features.id'], )
    )
    op.drop_column('businesses', 'takeout')
    op.drop_column('businesses', 'delivery')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('businesses', sa.Column('delivery', sa.BOOLEAN(), autoincrement=False, nullable=True))
    op.add_column('businesses', sa.Column('takeout', sa.BOOLEAN(), autoincrement=False, nullable=True))
    op.drop_table('biz_features')
    op.drop_table('features')
    # ### end Alembic commands ###
