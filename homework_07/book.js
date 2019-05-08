bookSchema = {
    isbn: String,
    author: String,
    keywords: [String],
    borrows: [{
        student: studentId,
        contactInfo: String,
        dueDate: Date
    }]
};
