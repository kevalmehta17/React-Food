export default function Button({children, textOnly ,className, ...props}){
    console.log("check", textOnly)
    let cssClasses = textOnly ? 'text-button' : 'button';
    cssClasses += ' ' + className;
    return (<button className={cssClasses} {...props}>
        {children}
    </button>)
}