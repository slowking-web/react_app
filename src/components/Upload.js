import MainPage from '../MainPage';

function Upload() {
    return (
        <div className="center-upload">
            <form method="post" action="https://q6w9llh5s1.execute-api.ap-northeast-1.amazonaws.com/default/myyflambda" enctype="multipart/form-data" target="sendPhoto" class="contact-form">
                <br />
                <input type="file" name="file1" size="30" /><br />
                <p><input type="submit" value="送信" /></p> 
            </form>
            <iframe color="red" className="upfile" name="sendPhoto" coloer="red"><font color="red">文字</font></iframe>
            <br />     
        </div>
    );
};

export default Upload;