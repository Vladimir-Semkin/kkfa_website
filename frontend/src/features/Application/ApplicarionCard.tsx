import React from 'react';
import { useAppDispatch } from '../../store';
import { Application } from '../RegApplication/types/types';
import { addAppInPart } from '../Participant/partSlice';

function ApplicationCard({
  application,
}: {
  application: Application;
}): JSX.Element {
  const dispatch = useAppDispatch();

  const pushApplPart = (): void => {
    dispatch(addAppInPart());
  };
  return (
    <tr>
      <td>
        <button type="submit" onClick={pushApplPart}>
          +
        </button>
      </td>
      <td>{application.familiya}</td>
      <td>{application.name}</td>
      <td>{application.otchestvo}</td>
      <td>{application.email}</td>
      <td>{application.datarojdeniya}</td>
      <td>{application.gorod}</td>
      <td>{application.phone}</td>
      <td>{application.udostovorenieVoditel}</td>
      <td>{application.licenseRAFNAF}</td>
      <td>{application.medicalReport}</td>
      <td>{application.markaModelAuto}</td>
      <td>{application.gosNomer}</td>
      <td>{application.objemDvigatelya}</td>
      <td>{application.tipPrivoda}</td>
      <td>{application.markaModelPokryshek}</td>
      <td>{application.nalichieNadduva}</td>
      <td>{application.mnogodresselnyVpusk}</td>
      <td>{application.izmFazyGazoraspredeleniya}</td>
      <td>{application.nestandartnyVpusk}</td>
      <td>{application.izmKuzova}</td>
      <td>{application.groupListId}</td>
      <td>{application.startNomer}</td>
      <td>{application.ispolzovanieAutoDrugimi}</td>
      <td>{application.startNomer}</td>
    </tr>
  );
}

export default ApplicationCard;
