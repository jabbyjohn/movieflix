import { Card, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"

const Genres = ["Action", "Drama", "Comedy", "Horror","Sci-fi","Documentary","Animationmovie"];

export default function AddMovie() {
    return (
       <main className="min-h-screen flex justify-center py-20 px-4">
           <Card sx={{width: 400}}>
                <CardHeader
                 sx={{textAlign: "center"}}
                 title="Add Movie"
                 subheader="Fill in Movie Details"
                />
                <CardContent>
                    <form className="flex flex-col gap-3">
                        <div>
                            <TextField
                             fullWidth
                             label="Title"
                             size="small"
                             id="title"
                             placeholder="Enter movie title......"
                            />
                        </div>
                        <div>
                            <FormControl fullWidth size="small">
                                <InputLabel>Genre</InputLabel>
                                <Select
                                label="Genre"
                                id="genre"
                                labelId="genre-label"
                                name="genre"
                                >
                                    {Genres.map(genre =>
                                    <MenuItem key={genre}>
                                      {genre}
                                    </MenuItem>
                                    )}
                                </Select>

                            </FormControl>
                        </div>
                        <div>
                            <TextField
                              fullWidth
                              label="poster URL"
                              size="small"
                              id="posterUrl"
                              type="url"
                            />
                            </div>
                            <div>
                                <TextField
                                  fullWidth
                                  label="Release Year"
                                  size="small"
                                  id="year"
                                  type="number"
                                />
                            </div>
                            <div>
                                <TextField
                                  fullWidth
                                  label="Notes"
                                  type="text"
                                  multiline
                                  rows={2}
                                  id="notes"
                                />
                            </div>
                            <button className="w-full h-10 rounded-md shadow-md text-white cursor-pointer bg-red-500 hover:opacity-75">Add Movie</button>

                        
                    </form>
                </CardContent>
           </Card>
       </main>
    )
}   