import { Box, Typography } from "@mui/joy"
import { useState } from "react"

const ImageInput = ({setImageUrl, setImage}) => {
	const [previewUrl, setPreviewUrl] = useState("")

	const handleOnDrag = event => {
		event.preventDefault()
	}
	const handleOnDrop = event => {
		event.preventDefault()
		event.stopPropagation()

		const imageFile = event.dataTransfer.files[0]
		const url = URL.createObjectURL(imageFile)

		setImageUrl && setImageUrl(url)
		setImage && setImage(imageFile)
		setPreviewUrl(url)
	}

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 2,
			}}
			onDragOver={handleOnDrag}
			onDrop={handleOnDrop}
		>
			{previewUrl && (
				<Box
					sx={{
						width: "100%"
					}}
					component="img"
					src={previewUrl}
					alt="preview"
				/>
			)}

			<Box
				sx={{
					padding: 3,
					textAlign: "center",
					borderRadius: 8,
					border: "4px dotted",
					borderColor: "primary.500"
				}}
			>
				<Typography
					color="primary"
					fontWeight="bold"
				>
					Przeciągnij tu obrazek
				</Typography>
			</Box>

		</Box>
	)
}

export default ImageInput
