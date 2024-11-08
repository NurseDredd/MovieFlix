import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=fc695e87bc3d5bcc0c53df8d0bd9fcbc&include_adult=false&include_video=false&language=sv-SE&page=1&sort_by=popularity.desc', () => {
    // Note that you DON'T have to stringify the JSON!
    return HttpResponse.json({

        "page":1,
        
        "results":[
        
        {
        
        "adult":false,
        
        "backdrop_path":"/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
        
        "genre_ids":[
        
        878,
        
        28,
        
        12
        
        ],
        
        "id":912649,
        
        "original_language":"en",
        
        "original_title":"Venom:TheLastDance",
        
        "overview":"EddieochVenomärpårymmen,jagadeavbådasvärldar.Närsnarandrasåt,tvingasduontillettförödandebeslutsomgörattridångårnerförderassistadans.",
        
        "popularity":4397.407,
        
        "poster_path":"/3XtZfVJbrrEJkqmDatUZlz8sVjS.jpg",
        
        "release_date":"2024-10-22",
        
        "title":"Venom:TheLastDance",
        
        "video":false,
        
        "vote_average":6.6,
        
        "vote_count":532
        
        },
        
        {
        
        "adult":false,
        
        "backdrop_path":"/gMQibswELoKmB60imE7WFMlCuqY.jpg",
        
        "genre_ids":[
        
        27,
        
        53,
        
        9648
        
        ],
        
        "id":1034541,
        
        "original_language":"en",
        
        "original_title":"Terrifier3",
        
        "overview":"MedaninvånarnaiMilesCountygörsigredoföråretsstorafamiljehögtidgörArttheClown,världensvidrigasteclown,återkomstitomteskrud.Hanärredomednyakreativasättattskördaoffer.Merblodännågonsinskafärgadennyfallnasnönröd.",
        
        "popularity":4184.074,
        
        "poster_path":"/krcuoiNQzJubqf90S0m3FDGKGZu.jpg",
        
        "release_date":"2024-10-09",
        
        "title":"Terrifier3",
        
        "video":false,
        
        "vote_average":7.231,
        
        "vote_count":683
        
        },
        
        ],
        
        "total_pages":46995,
        
        "total_results":939892
        
        })
  }),
]