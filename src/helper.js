export function handleActive(isActive, styles){
    console.log(isActive);
    return isActive ? styles.active : '';
}

export async function fetchData(URL){
    const response = await fetch(URL);
    if(!response.ok) throw new Error('No fetch Data');
        
    const data = await response.json();
        
    return data;
      
}

export function handleDate(date){
    if(!date) return;
    const d = Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
    })

    const dt = d.format(new Date(date));
    
    return dt;
}

export function handleDateWithoutDay(date){
    if(!date) return;
    const d = Intl.DateTimeFormat('en-US', {
        month:"long",
        day: "numeric",
        year:"numeric",
    })

    const dt = d.format(new Date(date));
    
    return dt;
}