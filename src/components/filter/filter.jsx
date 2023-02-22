
import './filter.css'

const FilterComponent = () => {
    return ( 
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Sort by</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          label="Sort by"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem >Low to High</MenuItem>
          <MenuItem >High to Low</MenuItem>
        </Select>
      </FormControl>
     );
}
 
export default FilterComponent;


