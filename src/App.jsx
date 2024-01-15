import { Box, Button, DialogContent, DialogTitle, Divider,Drawer, FormLabel, Input, ModalClose, FormControl, Sheet } from "@mui/joy";
import Main from "./components/Main"
import { Text, Check } from "lucide-react";
import { useState } from "react";
import ImageInput from "./components/ImageInput";

const App = () => {
	const [drawerOpen, setDrawerOpen] = useState(false)

	const [title, setTitle] = useState("Rekolekcje")
	const [subtitle, setSubtitle] = useState("Dla 'grupy'")
	const [location, setLocation] = useState("Ośrodek")
	const [date, setDate] = useState("1-2.03.2024")
	const [speaker, setSpeaker] = useState("Imię prowadzącego")
	const [speakerInfo, setSpeakerInfo] = useState("O prowadzącym")

	const [imageUrl, setImageUrl] = useState("")

	const [description, setDescription] = useState("Opis rekolekcji")
	const [locationInfo, setLocationInfo] = useState("Informacje o ośrodku")

	const [url, setUrl] = useState("www.stronainternetowa.pl")
	const [phone, setPhone] = useState("+48 000 000 000")

  return (
		<Main>
			<Box
				component="header"
				sx={{
					padding: 3,
					width: "100%",
					display: "flex",
					justifyContent: "space-between"
				}}
			>
				<Button
					startDecorator={<Text />}
					onClick={() => setDrawerOpen(true)}
				>
					Edytuj plakat
				</Button>
				<Button
					startDecorator={<Check />}
					color="success"
				>
					Zapisz plakat
				</Button>
			</Box>
			
			<Divider />

			<Drawer
				open={drawerOpen}
				onClose={() => setDrawerOpen(false)}
			>
				<ModalClose />
				<DialogTitle>Edytuj plakat</DialogTitle>
				<DialogContent
					sx={{				
						display: "flex",
						flexDirection: "column",
						gap: 2,
						padding: 3
					}}
				>
					<Sheet variant="soft" sx={{padding: 1, borderRadius: 4}}>
						<FormControl>
							<FormLabel>Tytuł</FormLabel>
							<Input
								placeholder="Tytuł plakatu"
								value={title}
								size="lg"
								onChange={e => setTitle(e.target.value)}
							/>
						</FormControl>

						<FormControl>
							<FormLabel>Podtytuł</FormLabel>
							<Input
								placeholder="Podtytuł plakatu"
								value={subtitle}
								size="lg"
								onChange={e => setSubtitle(e.target.value)}
							/>
						</FormControl>
					</Sheet>

					<Sheet variant="soft" sx={{padding: 1, borderRadius: 4}}>
						<FormControl>
							<FormLabel>Miejsce rekolekcji</FormLabel>
							<Input
								placeholder="Miejsce rekolekcji"
								value={location}
								onChange={e => setLocation(e.target.value)}
							/>
						</FormControl>

						<FormControl>
							<FormLabel>Data rekolekcji</FormLabel>
							<Input
								placeholder="Data rekolekcji"
								value={date}
								onChange={e => setDate(e.target.value)}
							/>
						</FormControl>
					</Sheet>

					<Sheet variant="soft" sx={{padding: 1, borderRadius: 4}}>
						<FormControl>
							<FormLabel>Prowadzący</FormLabel>
							<Input
								placeholder="Prowadzący"
								value={speaker}
								onChange={e => setSpeaker(e.target.value)}
							/>
						</FormControl>

						<FormControl>
							<FormLabel>O prowadzącym</FormLabel>
							<Input
								placeholder="O prowadzącym"
								value={speakerInfo}
								onChange={e => setSpeakerInfo(e.target.value)}
							/>
						</FormControl>
					</Sheet>

					<Sheet variant="soft" sx={{padding: 1, borderRadius: 4}}>
						<ImageInput
							setImageUrl={setImageUrl}
						/>
					</Sheet>

					<Sheet variant="soft" sx={{padding: 1, borderRadius: 4}}>
						<FormControl>
							<FormLabel>Opis rekolekcji</FormLabel>
							<Input
								placeholder="Opis rekolekcji"
								value={description}
								onChange={e => setDescription(e.target.value)}
							/>
						</FormControl>

						<FormControl>
							<FormLabel>Informacje o ośrodku</FormLabel>
							<Input
								placeholder="Informacje o ośrodku"
								value={locationInfo}
								onChange={e => setLocationInfo(e.target.value)}
							/>
						</FormControl>
					</Sheet>

					<Sheet variant="soft" sx={{padding: 1, borderRadius: 4}}>
						<FormControl>
							<FormLabel>Adres internetowy strony</FormLabel>
							<Input
								placeholder="Adres internetowy strony"
								value={url}
								onChange={e => setUrl(e.target.value)}
							/>
						</FormControl>

						<FormControl>
							<FormLabel>Telefon kontaktowy</FormLabel>
							<Input
								placeholder="Telefon kontaktowy"
								value={phone}
								onChange={e => setPhone(e.target.value)}
							/>
						</FormControl>
					</Sheet>

					<Button
						startDecorator={<Check />}
						onClick={() => setDrawerOpen(false)}
					>
						Zapisz zmiany
					</Button>
				</DialogContent>
			</Drawer>
		</Main>
  );
}

export default App
