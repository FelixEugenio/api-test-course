/* eslint-disable no-unused-vars */
module.exports = () => {

    const findAll = (req, res) => {
        const users = [
            {
                name:'Guilherme',
                mail:'Guilherme@gmail.com'
            }
        ]
        res.status(200).json(users)
    }
    
    const create = (req, res) => {
        const user = {
            name:'Guilherme',
            mail:'Guilherme@gmail.com'
        };

        res.status(201).json(user)
    }

    return {findAll , create}
}