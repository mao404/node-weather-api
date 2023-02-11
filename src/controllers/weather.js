const express = require('express')
const logger = require('../loaders/logger')
const Success = require('../handlers/successHandler')
const {
    weatherByCoordinates: weatherByCoordinatesService,
    weatherByCityId: weatherByCityIdService
} = require('../services/weatherService')


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res
 */
const weatherByCoordinates = async (req, res) => {
    //req.query to retrieve data via the query params (express)
    const {lon, lat} = req.query
    const weather = await weatherByCoordinatesService(lon, lat)
    const success = new Success(weather)
    res.json(success)
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res
 */
const weatherByCityId = async (req, res) => {
    //req.params because the parameters are set in the route
    logger.info(JSON.stringify(req.params))

    const id = req.params.id
    const city = req.params.city
    const weather = await weatherByCityIdService(city, id)
    const success = new Success(weather)
    res.json(success)
}



module.exports = {
    weatherByCoordinates,
    weatherByCityId
}