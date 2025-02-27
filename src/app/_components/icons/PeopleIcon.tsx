const PeopleIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M16.0007 17.3333C19.6825 17.3333 22.6673 14.3486 22.6673 10.6667C22.6673 6.98477 19.6825 4 16.0007 4C12.3188 4 9.33398 6.98477 9.33398 10.6667C9.33398 14.3486 12.3188 17.3333 16.0007 17.3333Z'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M26.6673 28C26.6673 25.171 25.5435 22.4579 23.5431 20.4575C21.5427 18.4571 18.8296 17.3333 16.0007 17.3333C13.1717 17.3333 10.4586 18.4571 8.45818 20.4575C6.45779 22.4579 5.33398 25.171 5.33398 28'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export default PeopleIcon;
