
module.exports = function(sequelize, Sequelize) {
	var Useritem = sequelize.define('Useritem', {
		name: {
			type: Sequelize.STRING,
			allowNull: false
		}
	});
	Useritem.associate = function(models) {
		// all items belong to a specific User
		// adding foreign key constraint so an Item cannot be created without a User
		Useritem.belongsTo(models.user, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	Useritem.associate = function(models) {
		// all items belong to a specific User
		// adding foreign key constraint so an Item cannot be created without a User
		Useritem.belongsTo(models.Product, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Useritem;
}