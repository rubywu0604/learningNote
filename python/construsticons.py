"""A staticmethod is a method that doesn't require an instance (self) or a class (cls).
So they belong to a class because, logically, they belong there.
Most of the time, though, you're better served by just creating a function in the same module as your class.
"""

class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def __str__(self):
        return '{} by {}'.format(self.title, self.author)

class Bookcase:
    def __init__(self, books=None):
        self.books = books

    @classmethod
    def create_bookcase(cls, book_list):
        books = []
        for title, author in book_list:
            books.append(Book(title, author))
            return cls(books)

bc = Bookcase.create_bookcase([('Moby-Dick', 'Herman Melville'), ('Jungle Book', 'Rudyard Kipling')])
print(str(bc.books[0]))

# ================================================================

class DreamVacation:
    def __init__(self, location, activities):
        self.location = location
        self.activities = activities
    # insert your code here
    @classmethod
    def rome(cls):
        return cls('Rome', ['visit the Colosseum', 'Eat gelato'])