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
        company: {
            type: DataType.STRING,
            allowNull: true
        },
        createdAt: {
            type: DataType.DATE,
            allowNull: false,
            defaultValue: DataType.NOW,
            validator: {
                isDate: true
            }
        },
        avatar: {
            type: DataType.STRING,
            allowNull: false,
            defaultValue: 'avatar.png'
        },
        updatedAt: {
            type: DataType.DATE,
            allowNull: true,
            validator: {
                isDate: true
            }
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
            defaultValue: false
        },
        email: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true,
            },
        },
    }, {
            hooks: {
                beforeCreate: user => {
                    const salt = bcrypt.genSaltSync();
                    user.password = bcrypt.hashSync(user.password, salt);
                },
                beforeUpdate: user => {
                    user.updatedAt = new Date();
                }
            },
            classMethods: {
                isPassword: (encodedPassword, password) => {
                    return bcrypt.compareSync(password, encodedPassword);
                },
                associate: models => {
                    Users.hasMany(models.Candidates);
                    Users.hasMany(models.Label);
                }
            },
        });
    return Users;
};