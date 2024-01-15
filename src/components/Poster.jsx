import { lineHeight, style } from "@mui/system"
import { Document, Font, Image, Link, Page, PDFViewer, StyleSheet, Text, View } from "@react-pdf/renderer"

const Poster = ({
	title,
	subtitle,
	location,
	date,
	speaker,
	speakerInfo,
	image,
	imageUrl,
	description,
	locationInfo,
	url,
	phone
}) => {
	Font.register({
		family: "Amiri", fonts: [
			{src: "/fonts/Amiri-Regular.ttf"},
			{src: "/fonts/Amiri-Bold.ttf", fontWeight: 700},
			{src: "/fonts/Amiri-Italic.ttf", fontStyle: "italic"},
		]
	})
	Font.register({
		family: "Montserrat", fonts: [
			{src: "/fonts/Montserrat-Regular.ttf"},
			{src: "/fonts/Montserrat-Medium.ttf", fontWeight: 500},
			{src: "/fonts/Montserrat-SemiBold.ttf", fontWeight: 600},
			{src: "/fonts/Montserrat-Bold.ttf", fontWeight: 700},
		]
	})

	const styles = StyleSheet.create({
		page: {
			flexDirection: "column",
			fontFamily: "Montserrat"
		},
		main: {
			flex: 1
		},
		title: {
			fontSize: "86px",
			textTransform: "uppercase",
			fontWeight: "bold",
		},
		subtitle: {
			fontSize: "28px",
			textTransform: "uppercase",
			fontWeight: "bold",
			margin: "-16px 0 0 5px"
		},
		location: {
			justifyContent: "flex-end",
			alignItems: "flex-end",
			gap: "8px",
			flexDirection: "row",
			textAlign: "right",
			textTransform: "uppercase",
			color: "#9f6c3a",
			fontWeight: "bold",
			margin: "-16px 5px 0 0"
		},
		date: {
			fontSize: "36px",
			marginBottom: "-4px"
		},

		speaker: {
			marginTop: "25%",
			marginLeft: "5px",
			lineHeight: 1.5,
			color: "#49382c",
			fontWeight: "bold"
		},
		speakerInfo: {
			fontSize: "12px",
			fontWeight: "semibold",
			textTransform: "uppercase"
		},

		image: {
			position: "absolute",
			bottom: 0,
			right: 0,
			height: "100%",
			width: "100%",
			objectFit: "contain",
			objectPosition: "right bottom",
			zIndex: -1,
		},

		description: {
			width: "100vw",
			backgroundColor: "black",
			padding: "20px",
			
			color: "white",
			fontSize: "14px",
			fontFamily: "Amiri",
			lineHeight: 1.2
		},

		info: {
			padding: "20px",
			paddingBottom: 0,
			
			fontSize: "14px",
			fontFamily: "Amiri",
			textAlign: "center",
			lineHeight: 1.2
		},

		footer: {
			padding: "20px",
			flexDirection: "row",
			justifyContent: "center",
			gap: "40px"
		},
		link: {
			fontSize: "12px",
			fontWeight: "bold",
			color: "#ad6530",
			textDecoration: "none"
		}
	})


	return (
		<PDFViewer
			style={{
				flex: 1
			}}
		>
			<Document>
				<Page
					size="A4"
					style={styles.page}
				>
					<View style={styles.main}>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.subtitle}>{subtitle}</Text>

						<View style={styles.location}>
							<Text>{location}</Text>
							<Text style={styles.date}>{date}</Text>
						</View>
	
						<View style={styles.speaker}>
							<Text>prowadzi</Text>
							<Text>{speaker}</Text>
							<Text style={styles.speakerInfo}>{speakerInfo}</Text>
						</View>

						<Image
							style={styles.image}
							source={{
								uri: imageUrl
							}}
						/>
					</View>

					<View style={styles.description}>
						<Text>{description}</Text>
					</View>
					<View style={styles.info}>
						<Text>{locationInfo}</Text>
					</View>
					<View style={styles.footer}>
						<Link style={styles.link} src={url}>{url}</Link>
						<Link style={styles.link} src={`tel:${phone}`}>{phone}</Link>
					</View>
				</Page>
			</Document>
		</PDFViewer>
	)
}

export default Poster
