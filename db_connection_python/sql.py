"""
    https://fastapi.tiangolo.com/tutorial/sql-databases/
    https://youtu.be/aAy-B6KPld8?si=-r1ncGw0Zc5CPSfS
    https://youtu.be/AKQ3XEDI9Mw?si=wYqiwF50TxS_Go-t

"""


import sqlalchemy as sa
from sqlalchemy.orm import Mapped, mapped_column, declarative_base, sessionmaker

DB = sa.create_engine("sqlite:///test.db")
SESSION = sessionmaker(bind=DB)
Base = declarative_base()


class Users(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    username: Mapped[str] = mapped_column(unique=True, nullable=False)
    email: Mapped[str] = mapped_column(unique=True, nullable=False)

    def __init__(self,username,email):
        self.username=username
        self.email=email

    def __repr__(self):
        return f"<User(id={self.id}, username={self.username}, email={self.email})>"
    
Base.metadata.create_all(DB)

user = Users(username="Kishan1", email="a1@b.c")
user2 = Users(username="Kishan2",email="a2@b.c")

with SESSION() as session:
    session.add(user)
    session.add(user2)
    session.commit()
