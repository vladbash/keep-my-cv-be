import bcrypt from 'bcrypt';

module.exports = (sequelize, DataType) => {
    const Users = sequelize.define('Users', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        surname: {
            type: DataType.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataType.DATE,
            allowNull: false
        },
        avatar: {
            type: DataType.STRING,
            allowNull: true
        },
        updatedAt: {
            type: DataType.DATE,
            allowNull: true
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        isActive: {
            type: DataType.BOOLEAN,
            defaultValue: true
        },
        email: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    }, {
            hooks: {
                beforeCreate: user => {
                    const salt = bcrypt.genSaltSync();
                    user.password = bcrypt.hashSync(user.password, salt);
                    user.createdAt = new Date();
                },
            },
            classMethods: {
                associate: models => {
                    Users.hasMany(models.Tasks);
                },
                isPassword: (encodedPassword, password) => {
                    return bcrypt.compareSync(password, encodedPassword);
                },
            },
        });
    return Users;
};