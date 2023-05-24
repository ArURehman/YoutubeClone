import sql from 'mssql';

const connectDB = async () => {
    try {
        await sql.connect('Server=youtubeclonedb.c1m9gxojj8ba.ap-southeast-2.rds.amazonaws.com,1433;Database=YoutubeCloneDB;User Id=admin;Password=youtube621;Encrypt=false');
    } catch (err) {
        console.log(err)
    }
}

export default connectDB