module.exports = (sequelize, dataTypes) => {
    let alias = "Miembros"; //se suele poner el nombre del modelo en plural, Asi sequalize va a llamar a la tabla
    //detallo las columnas de la tabla. Definimos el modelo
    let cols = {
        member_id: {
        type: dataTypes.INTEGER(11),  //tipo de dato del input en el front (datatype). Ecepto las PK y FK generalmente estos datos los mete el usuario y debo esperar recibir acá y en la DB lo mismo que me mandan en el input
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type:  dataTypes.STRING(100),
        allowNull: false
      },
      lastName: {
        type: dataTypes.STRING(100),
        allowNull: false
      },
      dateOfBirth: {
        type: dataTypes.DATE,
        allowNull: false
      },
      sex: {
        type: dataTypes.STRING(50),
        allowNull: false
      },
      relationalSituation: {
        type: dataTypes.STRING(50),
        allowNull: false
      },
      pathPhoto: {
        type: dataTypes.STRING(550),
      },
      job_fk: {
        type: dataTypes.INTEGER(11),
        allowNull: false
      },
      family_fk: {
        type: dataTypes.INTEGER(11),
        allowNull: false
      },
      residency_fk: {
        type: dataTypes.INTEGER(11),
        allowNull: false
      },
      socialMedia_fk: {
        type: dataTypes.INTEGER(11),
        allowNull: false
      },
      contact_fk: {
        type: dataTypes.INTEGER(11),
        allowNull: false
      },
      growUp_fk: {
        type: dataTypes.INTEGER(11),
        allowNull: false
      },
      interestArea_fk: {
        type: dataTypes.INTEGER(11),
        allowNull: false
      },
      needs_fk: {
        type: dataTypes.INTEGER(11),
        allowNull: false
      }
    };

    //Le explico a sequelize como está configurada la tabla en la base de datos
    let config = {
      tableName: "members", // nombre de la tabla en  BD
      timestamps: false, //declaro que la tabla no tiene las columnas createAt y updateAt, sino explotaría sequelize
    };

    //Acá defino el modelo de la tabla en sequelize con la info que le metí en el alias, las columnas que tiene y como está configurada en la DB
    const Miembro = sequelize.define(alias, cols, config);

    //Defino las asociaciones/relaciones con las tablas a traves de las Forange Keys
    Miembro.associate = function (models) {

        //Todas las relaciones están planteadas actualente como uno a uno
        Miembro.belongsTo(models.Trabajos, {
          as: "trabajo",
          foreignKey: "job_fk",
        }),
        Miembro.belongsTo(models.Familias, {
            as: "familia",
            foreignKey: "family_fk",
        }),
        Miembro.belongsTo(models.Residencias, {
        as: "residencia",
        foreignKey: "residency_fk",
        }),
        Miembro.belongsTo(models.RedSociales, {
        as: "redeSocial",
        foreignKey: "socialMedia_fk",
        }),
        Miembro.belongsTo(models.Contactos, {
        as: "contacto",
        foreignKey: "contact_fk",
        }),
        Miembro.belongsTo(models.Madureces, {
        as: "madurez",
        foreignKey: "growUp_fk",
        }),
        Miembro.belongsTo(models.Intereces, {
        as: "interes",
        foreignKey: "interestArea_fk",
        }),
        Miembro.belongsTo(models.Necesidades, {
        as: "necesidad",
        foreignKey: "needs_fk",
        })
    };
  
    return Miembro;
  };
  