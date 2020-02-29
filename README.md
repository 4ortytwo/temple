# temple

// \* post this in ReadMe -> using it this way to target the variable directly without destructuring as advised by Redux team to prevent unnecessary re-renders
const gallery = useSelector((state: RootState) => state.gallery.gallery);
