const Map = () => {
    return (
        <div className="w-full h-[500px]">
            <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=41.2995,69.2401&z=15&output=embed"
            ></iframe>
        </div>
    )
}

export default Map