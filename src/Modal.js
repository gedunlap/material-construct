import React from 'react'
import reactDom from 'react-dom'

export default function Modal({ open, onClose }) {
    if (!open) return null
    return reactDom.createPortal(
        <>
            <div className='modal'>
                <button onClick={onClose}>X</button>
                <iframe src="https://www.fresha.com/a/material-tampa-2502-north-howard-avenue-tjr5uxjo/booking?menu=true&dppub=true" scrolling="no" frameborder="0"></iframe>
            </div>
        </>,
        document.getElementById('portal')
    )
}
