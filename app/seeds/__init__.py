from flask.cli import AppGroup
from .users import seed_users, undo_users
# from .categories import seed_categories, undo_categories
# from .features import seed_features, undo_features
from .businesses import seed_businesses, undo_businesses
from .food import seed_food, undo_food


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # seed_categories()
    # seed_features()
    seed_businesses()
    seed_food()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    # undo_users()
    # undo_categories()
    # undo_features()
    # undo_businesses()
    undo_food()
    # Add other undo functions here
