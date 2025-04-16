
import { Router } from 'riza';
import "./main.css";

import "../src/main.css";

const App = () =>
<r-panel data-root="true" class="p-4 s-fill" onCreated={ () => queueMicrotask(() => Router.refresh()) }>

    <button class="btn" onClick={ () => window.document.documentElement.classList.toggle('light-mode') }>Toggle Light/Dark</button>
    <button class="btn" onClick={ (ev) => ev.currentTarget.querySelectorParent('[data-root]').dialog.toggleVisibility() }>Toggle Dialog</button>

    <div class="f-row">

        <div className="s-6">
            <p><b>Buttons</b></p>
            <div class="mb-1">
                <button class="btn">btn</button>
                <button class="btn outline">btn outline</button>
                <button class="btn s-small">btn s-small</button>
                <button class="btn outline s-small">btn outline s-small</button>
                <button class="btn s-tiny">btn tiny</button>
                <button class="btn outline s-tiny">btn outline s-tiny</button>
            </div>
            <div class="mb-1">
                <button class="btn primary">btn primary</button>
                <button class="btn primary outline">btn primary outline</button>
                <button class="btn primary s-small">btn primary s-small</button>
                <button class="btn primary s-small outline">btn primary s-small outline</button>
            </div>
            <div class="mb-1">
                <button class="btn secondary">btn secondary</button>
                <button class="btn secondary outline">btn secondary outline</button>
                <button class="btn secondary s-small">btn secondary s-small</button>
                <button class="btn secondary s-small outline">btn secondary s-small outline</button>
            </div>
            <div class="mb-1">
                <button class="btn success">btn success</button>
                <button class="btn success outline">btn success outline</button>
                <button class="btn success s-small">btn success s-small</button>
                <button class="btn success s-small outline">btn success s-small outline</button>
            </div>
            <div class="mb-1">
                <button class="btn warn">btn warn</button>
                <button class="btn warn outline">btn warn outline</button>
                <button class="btn warn s-small">btn warn s-small</button>
                <button class="btn warn s-small outline">btn warn s-small outline</button>
            </div>
            <div class="mb-1">
                <button class="btn danger">btn danger</button>
                <button class="btn danger outline">btn danger outline</button>
                <button class="btn danger s-small">btn danger s-small</button>
                <button class="btn danger s-small outline">btn danger s-small outline</button>
            </div>
            <div class="mb-1">
                <button class="btn info">btn info</button>
                <button class="btn info outline">btn info outline</button>
                <button class="btn info s-small">btn info s-small</button>
                <button class="btn info s-small outline">btn info s-small outline</button>
            </div>
            <div class="mb-1">
                <button class="btn inv">btn inv</button>
                <button class="btn inv outline">btn inv outline</button>
                <button class="btn inv s-small">btn inv s-small</button>
                <button class="btn inv s-small outline">btn inv s-small outline</button>
            </div>
        </div>

        <div className="s-6">
            <p><b>Form Elements</b></p>
            <div class="f-row cols-2 g-4">
                <div class="s-6">
                    <div class="form-field">
                        <label>Full Name</label>
                        <input type="text" />
                        <span class="field-error">Field error message.</span>
                    </div>
                    <div class="form-field">
                        <label>Description</label>
                        <textarea></textarea>
                        <small>This is a small note.</small>
                    </div>
                    <div class="form-field">
                        <label>Select Country</label>
                        <select>
                            <option>USA</option>
                            <option>Honduras</option>
                            <option>Japan</option>
                        </select>
                    </div>
                </div>

            </div>
        </div>

    </div>

    <r-panel class="dialog right">
        <div class="title text-center py-3 fs-1 fw-600">
            <b>Form Example</b>
        </div>

        <div class="content px-4 pb-3 fs-2d" style:width="350px">
            <div class="form-field">
                <label>Full Name</label>
                <input type="text" />
                <span class="field-error">Field error message.</span>
            </div>
            <div class="form-field">
                <label>Description</label>
                <textarea></textarea>
                <small>This is a small note.</small>
            </div>
            <div class="form-field">
                <label>Select Country</label>
                <select>
                    <option>USA</option>
                    <option>Honduras</option>
                    <option>Japan</option>
                </select>
            </div>
        </div>
    </r-panel>
    
    <r-panel class="dialog center is-inactive" data-ref="dialog">
        <div class="title text-center py-3 fs-1 fw-600">
            <b>Confirmation</b>
        </div>

        <div class="content px-4 pb-3 fs-2d text-center">
            Seg egestas ipsum non pretium efficitur.
            <br/>
            Fusce et luctus velit, ut vehicula nisl.
            <br/>
            Nulla et maximus augue.
            <br/><br/>
        </div>

        <div class="btn-strip">
            <span class="btn outline danger" onClick={ (ev) => ev.currentTarget.querySelectorParent('[data-root]').dialog.hide() }>Yes</span>
            <span class="btn outline success" onClick={ (ev) => ev.currentTarget.querySelectorParent('[data-root]').dialog.hide() }>No</span>
        </div>
    </r-panel>

</r-panel>
;

document.body.appendChild(App());
