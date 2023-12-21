import ReactPlayer from 'react-player/youtube'

const Video = () => {
	return (
		<ReactPlayer
			url={'https://youtu.be/bXLZ8I7s8tw?si=I6l-PgmG4sd8P_J2'}
			controls
			height={500}
		/>
	)
}

export default Video
