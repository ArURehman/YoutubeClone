const sql = require('mssql')

//get all videos
module.exports.videoGetAllController = async (req, res) => {
    const db = req.app.locals.db

    const result = await db.request()
        .query('SELECT u.Username, v.Thumbnail, v.VideoID FROM UserInfo u INNER JOIN Channel c ON u.UserID = c.UserID INNER JOIN Video v ON c.ChannelID = v.ChannelID')
    
    const videos = result.recordset
    res.status(200).json({videos})
}