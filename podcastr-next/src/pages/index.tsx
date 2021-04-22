import { GetStaticProps} from 'next';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { convertDurationToTimeString }from '../utils/convertDurationToTimeString';
import { api } from '../services/api';


type Episodes = {
  id: string;
  title: string;
  members: string;
  published_at: string;
}
type HomeProps = {
  episodes: Episodes[];
}

export default function Home(props: HomeProps) {


  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: { 
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR}),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file.url,
    };
  })

  return {
    props: {
      episodes,
    },
    revalidate: 3600 * 8,
  }


  /*return { 
    props: {
      episodes: data,
    },
    revalidate: 3600 * 8,
  }*/
}
