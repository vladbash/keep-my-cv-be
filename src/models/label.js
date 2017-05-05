module.exports = (sequelize, DataType) => {
    const Label = sequelize.define('Label', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        color: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        user_id: {
            type: DataType.INTEGER
        },
        label: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    }, {
            hooks: {
            },
            classMethods: {
                associate: models => {
                    Label.belongsTo(models.Users);
                }
            },
        });
    return Label;
};