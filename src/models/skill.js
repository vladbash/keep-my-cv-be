module.exports = (sequelize, DataType) => {
    const Skill = sequelize.define('Skill', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        label: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        }
    }, {
            hooks: {
            },
            classMethods: {
            },
        });
    return Skill;
};