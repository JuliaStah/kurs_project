function DownloadButton({urlJPG, urlPPTX}) {
    return (
        <div className="flex gap-2">
            <p>Скачать:</p>
            <a href={urlJPG} download>
                <button>.jpg</button>
            </a>
            <a href={urlPPTX} download>
                <button>.pptx</button>
            </a>
        </div>
    );
}

export default DownloadButton;
