import React, { useState, useEffect } from "react";
import Link from "@docusaurus/Link";
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from "./styles.module.css";

export default function KitsGalleryWithFilters({itemsArray, title, description}) {
  const [selectedDomain, setSelectedDomain] = useState('All Domains');
  const [filteredAndSortedKits, setFilteredAndSortedKits] = useState(itemsArray);
  const [sortOrder, setSortOrder] = useState('asc');

  // In charge of sort the cards by name alphabetically when the component mount
  useEffect(() => {
    const sortedArray = [...itemsArray].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredAndSortedKits(sortedArray);
  }, []);

  // In charge of filter the cards by domain, keeping the selected sorted order
  const handleDomainChange = (event) => {
    const selectedDomain = event.target.value;
    setSelectedDomain(selectedDomain);
  
    let filteredKits = itemsArray;
    if (selectedDomain !== 'All Domains') {
      filteredKits = itemsArray.filter((kit) => kit.domain === selectedDomain);
    }
  
    let sortedKits = filteredKits;
    if (sortOrder === 'asc') {
      sortedKits.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sortedKits.sort((a, b) => b.name.localeCompare(a.name));
    }
  
    setFilteredAndSortedKits(sortedKits);
  };

  // In charge of switch the sorted order by name from "asc" to "des" and vice versa
  const handleSort = () => {
    const sortedKits = [...filteredAndSortedKits];
  
    if (sortOrder === 'asc') {
      sortedKits.sort((a, b) => b.name.localeCompare(a.name));
      setSortOrder('desc');
    } else {
      sortedKits.sort((a, b) => a.name.localeCompare(b.name));
      setSortOrder('asc');
    }
  
    setFilteredAndSortedKits(sortedKits);
  };
  

  return (
    <section className={styles.kits_gallery}>
      <div className={styles.container}>

        <div className={styles.title_container}>
          <h2 className="title-h2">{title}</h2>
          <p className="subtitle-h3">{description}</p>
        </div>

        <div className={styles.filters_container}>
          <Box>
            <FormControl
              size="small"
            >
              {/* <InputLabel 
                sx={
                  {
                    color: '#FFF',
                    '&.Mui-focused': {
                      color: '#faa023'
                    }
                  }
                }
                id="domain-label"
              >
                Select Domain
              </InputLabel> */}
              <Select
                labelId="domain-label"
                id="domain-options"
                value={selectedDomain}
                // label="Select Domain"
                onChange={handleDomainChange}

                //styles for the input box
                sx={
                  {
                    color: '#fff',
                    padding: '0 0.5rem',
                    '& .MuiSvgIcon-root': {
                      color: '#faa023',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#faa023'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#c37304',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#ed8c05',
                    }
                  }
                }

                //styles for the dropdown paper
                inputProps={{
                  MenuProps: {
                    MenuListProps: {
                      sx: {
                        backgroundColor: '#1f1f1f',
                        color: '#fff',
                      }
                    },
                  }
                }}
              >
                <MenuItem value={'All Domains'}>All Domains</MenuItem>
                <MenuItem value={'Framework'}>Framework</MenuItem>
                <MenuItem value={'Software Languages'}>Software Languages</MenuItem>
                <MenuItem value={'CD tools'}>CD tools</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <div className={styles.button_container}>
            {
              sortOrder === 'asc' ?
              <button className={styles.button} onClick={handleSort}>A-Z &darr;</button> :
              <button className={styles.button} onClick={handleSort}>Z-A &uarr;</button>
            }
          </div>
        </div>

        <div className={styles.gallery_container}>
          {
            filteredAndSortedKits.length === 0 ?
            <p className={styles.no_match}>NO MATCH FOUND...</p> :
            filteredAndSortedKits.map((kit, index)=> {
              return(
                <div key={index} className={styles.gallery_item}>
                  <Link to={kit.pageRoute} className={styles.gallery_link}>
                  {typeof kit.img === 'function' ? (
                      <kit.img className={styles.item_img} alt={kit.name} /> 
                    ) : ( 
                      <img src={kit.img} className={styles.item_img} alt={kit.name} />
                    )}

                  </Link>
                </div>
              )      
            })
          }
        </div>
      </div>
    </section>
  );
}
