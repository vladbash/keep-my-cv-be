module.exports = (sequelize, DataType) => {
    const Contacts = sequelize.define('Contacts', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        value: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        type_id: {
            type: DataType.INTEGER
        },
        candidate_id: {
            type: DataType.INTEGER
        }
    }, {
            hooks: {
            },
            classMethods: {
                associate: models => {
                    Contacts.belongsTo(models.ContactType);
                    Contacts.belongsTo(models.Candidates);
                }
            },
        });
    return Contacts;
};