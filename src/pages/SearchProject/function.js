export function handleInputChange (e, state){
  state(e.target.value);
}

export function clearSearch (state){
  state('');
}

export function handleSubmit (e, state){
  e.preventDefault();
  console.log(state);
}

