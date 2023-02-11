const express = require('express')
const Success = require('../handlers/successHandler')
const {findCities} = require('../services/cityService')




/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res
 */
const cities = async (req, res) => {
    //req.params to retrieve data via URL
    const cities = await findCities(req.params.city)
    const success = new Success(cities)
    res.json(success)
}



module.exports = {
    cities
}