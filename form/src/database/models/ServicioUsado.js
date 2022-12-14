module.exports = (sequelize, dataTypes) => {
    let alias = "ServicioUsados"; //se suele poner el nombre del modelo en plural, Asi sequalize va a llamar a la tabla
    //detallo las columnas de la tabla. Definimos el modelo
    let cols = {
      servicesUsed_id: {
        type: dataTypes.INTEGER(11),  //tipo de dato del input en el front (datatype). Ecepto las PK y FK generalmente estos datos los mete el usuario y debo esperar recibir acá y en la DB lo mismo que me mandan en el input
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      cafeteria: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      camping: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      escuelaMusica: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      escuelaDanza: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      casaMujer: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      jardin: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      acasa: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      otherService: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      nthingService: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      }
    };
    
    //Le explico a sequelize como está configurada la tabla en la base de datos
    let config = {
      tableName: "services_used", // nombre de la tabla en  BD
      timestamps: false, //declaro que la tabla no tiene las columnas createAt y updateAt, sino explotaría sequelize
    };

    //Acá defino el modelo de la tabla en sequelize con la info que le metí en el alias, las columnas que tiene y como está configurada en la DB
    const ServicioUsado = sequelize.define(alias, cols, config);

    //Defino las asociaciones/relaciones con las tablas a traves de las Forange Keys
    ServicioUsado.associate = function (models) {

        //Todas las relaciones están planteadas actualente como uno a uno
        ServicioUsado.hasOne(models.Madureces, {
            as: "servicioUsado_madurez",
            foreignKey: "servicesUsed_fk",
        })
    };
  
    return ServicioUsado;
  };
  