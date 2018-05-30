pragma solidity ^0.4.18;

contract PoCEnergy {
    
    //Definimos al administrador, el unico que podra dar de alta usuarios
    //address admin;
    //function PoCEnergy() public {
    //    admin = msg.sender;
    //}
    
    //PRECIO
    uint256 prize = 100;
    function setPrize(uint256 value) public{
        //Solo puede establecer el precio de la energia el productor
        string memory profile = getUserProfile(msg.sender);
        if(keccak256(profile) != keccak256("producer")) return;
        prize = value;
    }
    function getPrize() view public returns (uint256) {
        return prize;
    }
    
    //USUARIOS
    struct User {
        //address who;
        string name;
        string profile;
    }
    // Declara una variable de estado que
    // almacena una estructura de datos `User` para cada posible dirección.
    mapping (address => User) users;
    address[] public userAccts;
    function setUser(address _address, string _name, string _profile) public {
        //Comprobamos que es el administrador quien intenta dar de alta usuarios 
        //if(msg.sender != admin) return;
        
        var user = users[_address];
        user.name = _name;
        user.profile = _profile;
        userAccts.push(_address) -1;
    }
    function getUsers() view public returns (address[]) {
        return userAccts;
    }
    function getUser(address usr) view public returns (address, string, string) {
        return (usr, users[usr].name, users[usr].profile);
    }
    function getUserName(address usr) view public returns (string) {
        return (users[usr].name);
    }
    function getUserProfile(address usr) view public returns (string) {
        return (users[usr].profile);
    }
    
    //ENERGIA PRODUCIDA
    struct ProducedEnergy {
        uint256 quantity;
        //address producer;
        string producerName;
    }
    mapping (uint => ProducedEnergy) producedEner;
    uint[] public producedDates;
    function setProducedEnergy(uint256 _quantity, uint _date) public {
        string memory profile = getUserProfile(msg.sender);
        if(keccak256(profile) != keccak256("producer")) return;
        var produced = producedEner[_date];
        produced.quantity = _quantity;
        //produced.producer = msg.sender;
        produced.producerName = getUserName(msg.sender);
        producedDates.push(_date) -1;
        //eventProduceEnergy(msg.sender, _quantity, _date);
    }
    // Events allow light clients to react on
    // changes efficiently.
    //event eventProduceEnergy(address how, uint quantity, uint date);
    function getProducedEnergies() view public returns (uint[]) {
        return producedDates;
    }
    //function getProducedEner(uint date) view public returns (uint, string,
    //    uint256) {
    //    return (date, producedEner[date].producer, producedEner[date].quantity);
    //}
    function getProducedEner(uint date) view public returns (uint, uint256, string) {
        return (date, producedEner[date].quantity, producedEner[date].producerName);
    }
    
    //ENERGIA COMPRADA
    struct PurchasedEnergy {
        //address producer;
        //address marketer;
        string producerName;
        string marketerName;
        uint256 quantity;
        uint256 value;
    }
    mapping (uint => PurchasedEnergy) purchasedEner;
    uint[] public purchasedDates;
    function setPurchasedEnergy(address _producer, uint256 _quantity, 
        uint _date) public {
        string memory profile = getUserProfile(msg.sender);
        if(keccak256(profile) != keccak256("marketer")) return;
        var purchased = purchasedEner[_date];
        //purchased.producer = _producer;
        //purchased.marketer = msg.sender;
        purchased.producerName = getUserName(_producer);
        purchased.marketerName = getUserName(msg.sender);
        purchased.quantity = _quantity;
        purchased.value = (prize / 10)* 11;
        purchasedDates.push(_date) -1;
        //TODO definir evento
        //TODO Comprobar que el Productor tiene tanta energia como la que se solicita
        //Esta comprobación la haremos a partir de la fecha y la energía que tiene ya vendida
        //En caso afirmativo
            //TODO Añadir transacción con la cantidad de energía del Comprador
        //En caso negativo
            //TODO Error
    }
    function getPurchasedEnergies() view public returns (uint[]) {
        return purchasedDates;
    }
    function getPurchasedEner(uint date) view public returns (uint, string,
        string, uint256, uint256) {
        return (date, purchasedEner[date].producerName, 
            purchasedEner[date].marketerName, purchasedEner[date].quantity,
            purchasedEner[date].value);
    }
    
    //ENERGIA CONSUMIDA
    //Date: fecha y hora
    struct ConsumedEnergy {
        //address marketer;
        //address client;
        string marketerName;
        string clientName;
        uint256 quantity;
        uint256 value;
        string concept;
        uint date;
    }
    mapping (uint => ConsumedEnergy) consumedEner;
    uint[] public consumedDates;
    function setConsumedEnergy(address _marketer, uint256 _quantity, 
        string _concept, uint _date) public {
        string memory profile = getUserProfile(msg.sender);
        if(keccak256(profile) != keccak256("client")) return;
        var consumed = consumedEner[_date];
        //consumed.marketer = _marketer;
        //consumed.client = msg.sender;
        consumed.marketerName = getUserName(_marketer);
        consumed.clientName = getUserName(msg.sender);
        consumed.quantity = _quantity;
        consumed.value = (prize / 10)* 12;
        consumed.concept = _concept;
        consumed.date = _date;
        consumedDates.push(_date) -1;
         //TODO Comprobar que el Comprador tiene tanta energia como la que se solicita
        //Esta comprobación la haremos a partir de la fecha y la energía que tiene ya vendida
        
        //En caso afirmativo
            //TODO Añadir transacción del consumo de energía del cliente
        //En caso negativo
            //TODO Error -- corte de energía
    }
    function getConsumedEnergies() view public returns (uint[]) {
        return consumedDates;
    }
    function getConsumedEner(uint date) view public returns (uint, string,
        string, uint256, uint256, string) {
        return (date, consumedEner[date].marketerName,
            consumedEner[date].clientName, consumedEner[date].quantity,
            consumedEner[date].value, consumedEner[date].concept);
    }
    
    //function subtract() public { //decreases counter by 1
    //    counter--;
    //}
    
    //function getCounter() public constant returns (uint256) {
    //    return counter;
    //}
}