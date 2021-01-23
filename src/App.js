import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import './App.css';
import CountUp from 'react-countup';
import GaugeChart from 'react-gauge-chart';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12
  },
]
const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

const App = () => {
  
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  
  
    return (
        <div className="container">

            <Typography variant="h1" className="h1">  🎬 Movies </Typography>
            <div className="pays">
            <select defaultValue="">
            <option checkbox >category</option>
            <option value="">Comedy</option>
            <option value="France">Thriller</option>
            <option value="France">Drame</option>
            <option value="France">Animation</option>
            

            </select>
            


        </div>
            <Grid container spacing={0} justify="center">
            
                <Grid item component={Card} xs={12} md={3} className="card">
                    <CardContent>
                    <img className="image"
      src="https://fr.web.img3.acsta.net/pictures/18/05/14/12/19/5676009.jpg"
      alt="new"
      />
                        <Typography ><strong>{movies[0].title} </strong> </Typography>
                        <Typography variant="body2">{movies[0].category}</Typography>

                        <Typography variant="body2"></Typography>
                        <GaugeChart id="gauge-chart5"
                          arcsLength={[movies[0].likes, movies[0].dislikes]}
                          colors={['#5BE12C','#EA4228']}
                          percent={movies[0].likes/(movies[0].likes+movies[0].dislikes) }
                          textColor={'rgba(17, 17, 17, 0.4)'}
                          arcPadding={0.02}
                        />
                        <Typography variant="body2">{movies[0].likes} <button>👍 </button> | <button>👎</button>   {movies[0].dislikes} </Typography>
                        <br/>
                        <div className={classes.root}>
                          <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                              setHover(newHover);
                            }}
                          />
                          {value !== null && 
                          <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
                        </div>
                        <br/>
                        <button className="button">SUPPRIMER</button>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card">
                    <CardContent>
                    <img className="image"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRssBog-5ouge79OqWeRZoN1OWHpekPiNrHN_DqyXo-ylQWneQs"
      alt="new"
      />
                        <Typography ><strong>{movies[1].title} </strong></Typography>
                        <Typography variant="body2">{movies[1].category}</Typography>
                        <Typography variant="">
                            <CountUp start={0} duration={2.5} separator="," />
                        </Typography>
                        
                        <Typography variant="body2"></Typography>
                        <GaugeChart id="gauge-chart5"
                          arcsLength={[movies[1].likes, movies[1].dislikes]}
                          colors={['#5BE12C','#EA4228']}
                          percent={movies[1].likes/(movies[1].likes+movies[1].dislikes) }
                          textColor={'rgba(17, 17, 17, 0.4)'}
                          arcPadding={0.02}
                        />
                        <Typography variant="body2">{movies[1].likes} <button>👍 </button> | <button>👎</button>   {movies[1].dislikes} </Typography>
                        <br/>
                        <button className="button">SUPPRIMER</button>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card">
                    <CardContent>
                    <img className="image"
      src="https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg"
      alt="new"
      />
                        <Typography ><strong>{movies[2].title} </strong></Typography>
                        <Typography variant="body2">{movies[2].category}</Typography>
                        <Typography variant="">
                            <CountUp start={0} duration={2.5} separator="," />
                        </Typography>
                        
                        <Typography variant="body2"></Typography>
                        <GaugeChart id="gauge-chart5"
                          arcsLength={[movies[2].likes, movies[2].dislikes]}
                          colors={['#5BE12C','#EA4228']}
                          percent={movies[2].likes/(movies[2].likes+movies[2].dislikes) }
                          textColor={'rgba(17, 17, 17, 0.4)'}
                          arcPadding={0.02}
                        />
                        <Typography variant="body2">{movies[2].likes} <button>👍 </button> | <button>👎</button>  {movies[2].dislikes} </Typography>
                        <br/>
                        <button className="button">SUPPRIMER</button>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card">
                    <CardContent>
                    <img className="image"
      src="https://fr.web.img3.acsta.net/pictures/18/03/22/16/48/2454348.jpg"
      alt="new"
      />
                        <Typography ><strong>{movies[3].title} </strong></Typography>
                        <Typography variant="body2">{movies[3].category}</Typography>
                        <Typography variant="">
                            <CountUp start={0} duration={2.5} separator="," />
                        </Typography>
                        
                        <Typography variant="body2"></Typography>
                        <GaugeChart id="gauge-chart5"
                          arcsLength={[movies[3].likes, movies[3].dislikes]}
                          colors={['#5BE12C','#EA4228']}
                          percent={movies[3].likes/(movies[3].likes+movies[3].dislikes) }
                          textColor={'rgba(17, 17, 17, 0.4)'}
                          arcPadding={0.02}
                        />
                        <Typography variant="body2">{movies[3].likes}  <button>👍 </button> | <button>👎</button>   {movies[3].dislikes} </Typography>
                        <br/>
                        <button className="button">SUPPRIMER</button>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card">
                    <CardContent>
                    <img className="image"
      src="https://images-na.ssl-images-amazon.com/images/I/81rpB-3qwoL._AC_SL1500_.jpg"
      alt="new"
      />
                        <Typography ><strong>{movies[4].title} </strong></Typography>
                        <Typography variant="body2">{movies[4].category}</Typography>
                        <Typography variant="">
                            <CountUp start={0} duration={2.5} separator="," />
                        </Typography>
                        
                        <Typography variant="body2"></Typography>
                        <GaugeChart id="gauge-chart5"
                          arcsLength={[movies[4].likes, movies[4].dislikes]}
                          colors={['#5BE12C','#EA4228']}
                          percent={movies[4].likes/(movies[4].likes+movies[4].dislikes) }
                          textColor={'rgba(17, 17, 17, 0.4)'}
                          arcPadding={0.02}
                        />
                        <Typography variant="body2">{movies[4].likes}  <button>👍 </button> | <button>👎</button>  {movies[4].dislikes} </Typography>
                        <br/>
                        <button className="button">SUPPRIMER</button>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card">
                    <CardContent>
                    <img className="image"
      src="https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/121/7p8x4u3o3p1jzmbqny3zaloby3m-861.jpg"
      alt="new"
      />
                        <Typography ><strong>{movies[5].title} </strong></Typography>
                        <Typography variant="body2">{movies[5].category}</Typography>
                        <Typography variant="">
                            <CountUp start={0} duration={2.5} separator="," />
                        </Typography>
                        
                        <Typography variant="body2"></Typography>
                        <GaugeChart id="gauge-chart5"
                          arcsLength={[movies[5].likes, movies[5].dislikes]}
                          colors={['#5BE12C','#EA4228']}
                          percent={movies[5].likes/(movies[5].likes+movies[5].dislikes) }
                          textColor={'rgba(17, 17, 17, 0.4)'}
                          arcPadding={0.02}
                        />
                        <Typography variant="body2">{movies[5].likes} <button>👍 </button> | <button>👎</button>   {movies[5].dislikes} </Typography>
                        <br/>
                        <button className="button">SUPPRIMER</button>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card">
                    <CardContent>
                    <img className="image"
      src="https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/121/7p8x4u3o3p1jzmbqny3zaloby3m-861.jpg"
      alt="new"
      />
                        <Typography ><strong>{movies[6].title} </strong></Typography>
                        <Typography variant="body2">{movies[6].category}</Typography>
                        <Typography variant="">
                            <CountUp start={0} duration={2.5} separator="," />
                        </Typography>
                        
                        <Typography variant="body2"></Typography>
                        <GaugeChart id="gauge-chart5"
                          arcsLength={[movies[6].likes, movies[6].dislikes]}
                          colors={['#5BE12C','#EA4228']}
                          percent={movies[6].likes/(movies[6].likes+movies[6].dislikes) }
                          textColor={'rgba(17, 17, 17, 0.4)'}
                          arcPadding={0.02}
                        />
                        <Typography variant="body2">{movies[6].likes}  <button>👍 </button> | <button>👎</button>  {movies[6].dislikes} </Typography>
                        <br/>
                        <button className="button">SUPPRIMER</button>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card">
                    <CardContent>
                    <img className="image"
      src="https://fr.web.img2.acsta.net/medias/nmedia/18/35/91/33/19255605.jpg"
      alt="new"
      />
                        <Typography ><strong>{movies[7].title} </strong></Typography>
                        <Typography variant="body2">{movies[7].category}</Typography>
                        <Typography variant="">
                            <CountUp start={0} duration={2.5} separator="," />
                        </Typography>
                        
                        <Typography variant="body2"></Typography>
                        <GaugeChart id="gauge-chart5"
                          arcsLength={[movies[7].likes, movies[7].dislikes]}
                          colors={['#5BE12C','#EA4228']}
                          percent={movies[7].likes/(movies[7].likes+movies[7].dislikes) }
                          textColor={'rgba(17, 17, 17, 0.4)'}
                          arcPadding={0.02}
                        />
                        <Typography variant="body2">{movies[7].likes}  <button>👍 </button> | <button>👎</button>  {movies[7].dislikes} </Typography>
                        <br/>
                        <button className="button">SUPPRIMER</button>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card">
                    <CardContent>
                    <img className="image"
      src="https://img-4.linternaute.com/hjM5dgLFPajbUWUmTVDwLHOqt3c=/1240x/19547719906f480d80a7c0a77d93f6be/ccmcms-linternaute/127232.jpg"
      alt="new"
      />
                        <Typography ><strong>{movies[8].title} </strong></Typography>
                        <Typography variant="body2">{movies[8].category}</Typography>
                        <Typography variant="">
                            <CountUp start={0} duration={2.5} separator="," />
                        </Typography>
                        
                        <Typography variant="body2"></Typography>
                        <GaugeChart id="gauge-chart5"
                          arcsLength={[movies[8].likes, movies[8].dislikes]}
                          colors={['#5BE12C','#EA4228']}
                          percent={movies[8].likes/(movies[8].likes+movies[8].dislikes) }
                          textColor={'rgba(17, 17, 17, 0.4)'}
                          arcPadding={0.02}
                        />
                        <Typography variant="body2">{movies[8].likes}  <button>👍 </button> | <button>👎</button>  {movies[8].dislikes}</Typography>
                        <br/>
                        <button className="button">SUPPRIMER</button>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card">
                    <CardContent>
                    <img className="image"
      src="https://addict-culture.com/wp-content/uploads/2014/10/gone-girl-poster.jpg"
      alt="new"
      />
                        <Typography ><strong>{movies[9].title} </strong></Typography>
                        <Typography variant="body2">{movies[9].category}</Typography>
                        <Typography variant="">
                            <CountUp start={0} duration={2.5} separator="," />
                        </Typography>
                        
                        <Typography variant="body2"></Typography>
                        <GaugeChart id="gauge-chart5"
                          arcsLength={[movies[9].likes, movies[9].dislikes]}
                          colors={['#5BE12C','#EA4228']}
                          percent={movies[9].likes/(movies[9].likes+movies[9].dislikes) }
                          textColor={'rgba(17, 17, 17, 0.4)'}
                          arcPadding={0.02}
                        />
                        <Typography variant="body2">{movies[9].likes} <button>👍 </button> | <button>👎</button>   {movies[9].dislikes} </Typography>
                        <br/>
                        <button className="button">SUPPRIMER</button>

                    </CardContent>
                </Grid>

                
            </Grid>
            <div className="page">
            <Pagination  count={10} />

            <select className="page2">
            <option>4</option>
            <option>8</option>
            <option>12</option>
            </select>

            </div>
            
        </div>
    )
}
export default App;