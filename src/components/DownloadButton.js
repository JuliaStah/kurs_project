function DownloadButton({url}) {
    return (
        <div>
            <a href={url} download>
                <button>Скачать</button>
            </a>
        </div>
    );
}

export default DownloadButton;
