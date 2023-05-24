import sql from 'mssql';

const connectDB = async () => {
    try {
        await sql.connect('Server=,1433;Database=YoutubeCloneDB;User Id=;Password=;Encrypt=false');
    } catch (err) {
        console.log(err)
    }
}

export default connectDB
