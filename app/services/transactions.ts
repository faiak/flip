import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export default function getList() {
  return apiClient.get(ApiConfig.TRANSACTION_LIST);
}
