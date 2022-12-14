module.exports = (sequelize, dataTypes) => {
    let alias = "Contactos"; //se suele poner el nombre del modelo en plural, Asi sequalize va a llamar a la tabla
    //detallo las columnas de la tabla. Definimos el modelo
    let cols = {
        contact_id: {
        type: dataTypes.INTEGER(11),  //tipo de dato del input en el front (datatype). Ecepto las PK y FK generalmente estos datos los mete el usuario y debo esperar recibir acá y en la DB lo mismo que me mandan en el input
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      phone: {
        type:  dataTypes.INTEGER(100),
        allowNull: false,
      },
      homePhone: {
        type:  dataTypes.INTEGER(100),
      },
      email: {
        type:  dataTypes.STRING(250),
        allowNull: false,
      }
    };
    
    //Le explico a sequelize como está configurada la tabla en la base de datos
    let config = {
      tableName: "contact", // nombre de la tabla en  BD
      timestamps: false, //declaro que la tabla no tiene las columnas createAt y updateAt, sino explotaría sequelize
    };

    //Acá defino el modelo de la tabla en sequelize con la info que le metí en el alias, las columnas que tiene y como está configurada en la DB
    const Contacto = sequelize.define(alias, cols, config);

    //Defino las asociaciones/relaciones con las tablas a traves de las Forange Keys
    Contacto.associate = function (models) {

        //Todas las relaciones están planteadas actualente como uno a uno
        Contacto.hasOne(models.Miembros, {
          as: "contacto_miembro",
          foreignKey: "contact_fk",
        })
    };
  
    return Contacto;
  };
  