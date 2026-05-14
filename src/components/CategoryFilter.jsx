function CategoryFilter({
    categories,
    selectedCategory,
    setSelectedCategory,
}) {
    return (
        <select
            className="form-select mb-4"
            value={selectedCategory}
            onChange={(e) =>
                setSelectedCategory(e.target.value)
            }
        >
            <option value="">Tutte le categorie</option>

            {categories.map((category) => (
                <option
                    key={category}
                    value={category}
                >
                    {category}
                </option>
            ))}
        </select>
    )
}

export default CategoryFilter