module.exports = (sequelize, dataTypes) => {
    let alias = "Madureces"; //se suele poner el nombre del modelo en plural, Asi sequalize va a llamar a la tabla
    //detallo las columnas de la tabla. Definimos el modelo
    let cols = {
        gronwUp_id: {
            type: dataTypes.INTEGER(11),  //tipo de dato del input en el front (datatype). Ecepto las PK y FK generalmente estos datos los mete el usuario y debo esperar recibir acá y en la DB lo mismo que me mandan en el input
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
      },
      liveChurch: {
            type:  dataTypes.STRING(50),
            allowNull: false,
      },
      timeChurch: {
            type:  dataTypes.STRING(50),
            allowNull: false,
      },
      smallGroup_fk: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
      },
      voluntary_fk: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
      },
      servicesUsed_fk: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
      },
      churchExperiences_fk: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
      }   
    };
    
    //Le explico a sequelize como está configurada la tabla en la base de datos
    let config = {
      tableName: "gronwup", // nombre de la tabla en  BD
      timestamps: false, //declaro que la tabla no tiene las columnas createAt y updateAt, sino explotaría sequelize
    };

    //Acá defino el modelo de la tabla en sequelize con la info que le metí en el alias, las columnas que tiene y como está configurada en la DB
    const Madurez = sequelize.define(alias, cols, config);

    //Defino las asociaciones/relaciones con las tablas a traves de las Forange Keys
    Madurez.associate = function (models) {

        //Todas las relaciones están planteadas actualente como uno a uno
        Madurez.hasOne(models.Miembros, {
          as: "madurez_miembro",
          foreignKey: "growUp_fk",
        }),

        Madurez.belongsTo(models.GrupoPequenios, {
            as: "grupoPequenio",
            foreignKey: "smallGroup_fk",
        }),
        Madurez.belongsTo(models.Voluntarios, {
            as: "voluntarios",
            foreignKey: "voluntary_fk",
        }),
        Madurez.belongsTo(models.ServicioUsados, {
            as: "servicioUsado",
            foreignKey: "servicesUsed_fk",
        }),
        Madurez.belongsTo(models.ExperienciaCompletadas, {
            as: "experienciaCompletada",
            foreignKey: "churchExperiences_fk",
        })
    };
  
    return Madurez;
  };
  