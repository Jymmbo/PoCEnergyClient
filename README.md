# PoCEnergyClient

El siguiente proyecto es una Prueba de Concepto (PoC) desarrollada sobre Ethereum. El caso de uso abordado se corresponde a un escenario del sector energético en el que participan múltiples actores. A continuació se explican los pasos a seguir para reproducir la PoC en local.

## Entorno local

Para poder llevar a cabo la PoC es necesario tener una Blockchain en local, lo cual haremos mediante Ganache, e inicializar los usuarios que utilizaremos a posteriori, lo cual haremos vía Remix.

### Ganache

Acceder a la página de [Truffle Ganache](http://truffleframework.com/ganache/), descargarse el correspondiente fichero y ejecutarlo.


### Remix

Acceder por medio de un navegador a la página de [Remix](http://remix.ethereum.org/).

Tras ello habrá que ejecutar una serie de pasos. Como soporte podrían servir las siguientes entradas del blog de Izertis:

 * [Cómo arrancar y testear tu propia Blockchain con Ganache](https://transformaciondigital.izertis.com/blog/como-arrancar-y-testear-tu-propia-blockchain-con-ganache)
 * [Cómo poner en marcha tu primer Smart Contract en 3 pasos](https://transformaciondigital.izertis.com/blog/como-poner-en-marcha-tu-primer-smart-contract-en-3-pasos) 

Ejecutar los siguientes pasos:

 * Pegar el Smart Contract (PoCEnergy-SmartContract.sol) en el navegador.
 * Compilar y desplegar Smart Contract en Ganache.
 * **Añador usuarios** mediante la interfaz que nos proporciona Remix. Utilizar el método (y botón) setUser.

```
0xca35b7d915458ef540ade6068dfe2f44e8fa733c, "MyCompany", "producer"

```

Los perfiles/roles de usuario son: producer, marketer y client


## Puesta en marcha de la PoC

Para que la PoC funcione en el correspondiente entornom habrá que cambiar en los ficheros **index.html** y **data.html** los siguiente parámetros:

 * HttpProvider: conexión a la Blockchain
 * Dirección del Smart Contract

```
var PoCEnergy = PoCEnergyContract.at(**"direccion a cambiar"**)

```



