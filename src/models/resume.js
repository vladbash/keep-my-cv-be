module.exports = (sequelize, DataType) => {
    const Resume = sequelize.define('Resume', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataType.STRING,
            allowNull: false
        },
        link: {
            type: DataType.STRING
        },
        createdAt: {
            type: DataType.DATE,
        },
        updatedAt: {
            type: DataType.DATE,
        },
        candidate_id: {
            type: DataType.INTEGER
        }
    }, {
            hooks: {
                beforeCreate: resume => {
                    resume.createdAt = new Date();
                },
                beforeUpdate: resume => {
                    resume.updatedAt = new Date();
                }
            },
            classMethods: {
                associate: models => {
                    Resume.belongsTo(models.Candidates);
                }
            },
        });
    return Resume;
};