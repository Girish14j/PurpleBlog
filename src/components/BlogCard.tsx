import {
  type BlogPost,
  formatDate,
  generateSnippet,
} from './../utils/blogutils';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from './../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const { id, title, content, author, category, coverImage, createdAt } = post;

  return (
    <Link to={`/post/${id}`} className='block'>
      <Card className='overflow-hidden h-full card-hover'>
        {coverImage && (
          <div className='aspect-video w-full overflow-hidden'>
            <img
              src={coverImage}
              alt={title}
              className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
            />
          </div>
        )}
        <CardHeader className='pb-3'>
          <div className='flex justify-between items-start'>
            <Badge variant='outline' className='mb-2'>
              {category}
            </Badge>
            <span className='text-xs text-muted-foreground'>
              {formatDate(createdAt)}
            </span>
          </div>
          <h3 className='text-xl font-semibold line-clamp-2'>{title}</h3>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground line-clamp-3'>
            {generateSnippet(content)}
          </p>
        </CardContent>
        <CardFooter>
          <p className='text-sm'>By {author}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
