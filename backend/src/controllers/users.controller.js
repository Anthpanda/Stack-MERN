export const getUsers = (req, res) => {
    res.json({
        message: 'Get - Users Routes'
    });
}

export const createUsers = (req, res) => {
    res.json({
        message: 'Post - Users Routes'
    });
}

export const deleteUser = (req, res) => {
    res.json({
        message: 'User - Deleted'
    });
}
