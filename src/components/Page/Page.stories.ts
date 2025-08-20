import { InputFieldPage } from './InputFieldPage';
import { DataTablePage } from './DataTablePage';

export default {
  title: 'Components/Page',
};

export const InputField = {
  render: function() {
    return InputFieldPage({});
  },
};

export const DataTable = {
  render: function() {
    return DataTablePage({});
  },
};