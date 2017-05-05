module.exports = (sequelize, DataType) => {
    const ContactType = sequelize.define('ContactType', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
            hooks: {
            },
            classMethods: {
                associate: models => {
                    ContactType.hasMany(models.Contacts);
                }
            },
        });
    return ContactType;
};