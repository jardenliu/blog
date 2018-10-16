import { get } from '../units/http';
import config from '../../config.yml';

export const getBlogData = () => {
  return get(config.data.json)
} 
