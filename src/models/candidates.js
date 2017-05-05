module.exports = (sequelize, DataType) => {
    const Candidates = sequelize.define('Candidates', {
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
        notes: {
            type: DataType.TEXT
        },
        city: {
            type: DataType.STRING
        },
        country: {
            type: DataType.STRING
        },
        user_id: {
            type: DataType.INTEGER
        },
        birthday: {
            type: DataType.DATE
        },
        createdAt: {
            type: DataType.DATE,
            allowNull: false,
            validator: {
                isDate: true
            }
        },
        photo: {
            type: DataType.STRING,
            allowNull: true
        },
        updatedAt: {
            type: DataType.DATE,
            allowNull: true,
            validator: {
                isDate: true
            }
        },
    }, {
            hooks: {
                beforeCreate: candidate => {
                    candidate.createdAt = new Date();
                },
                beforeUpdate: candidate => {
                    candidate.updatedAt = new Date();
                }
            },
            classMethods: {
                associate: models => {
                    Candidates.belongsTo(models.Users);
                    Candidates.hasMany(models.Contacts);
                    Candidates.hasMany(models.Resume);
                }
            },
        });
    return Candidates;
};